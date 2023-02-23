import { Header } from "../../components/Header"
import { FlatList } from "react-native"
import { Highlight } from "../../components/Highlight"
import { GroupCard } from "../../components/GroupCard"
import { Container } from "./styles"
import { ListEmpty } from "../../components/ListEmpty"
import { useState, useEffect, useCallback } from "react"
import { Button } from "../../components/Button"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { groupCreate } from "../../storage/group/groupCreate"
import { groupGetAll } from "../../storage/group/groupGetAll"

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate("new")
  }

  async function fetchGroups() {
    try {
      const data = await groupGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group })
  }

  useFocusEffect(
    useCallback(() => {
      console.log("UseFocus executou")
      fetchGroups()
    }, [])
  )

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova Turma" onPress={handleNewGroup} />
    </Container>
  )
}
