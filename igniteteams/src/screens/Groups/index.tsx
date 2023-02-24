import { Header } from "../../components/Header";
import { Alert, FlatList } from "react-native";
import { Highlight } from "../../components/Highlight";
import { GroupCard } from "../../components/GroupCard";
import { Container } from "./styles";
import { ListEmpty } from "../../components/ListEmpty";
import { useState, useCallback } from "react";
import { Button } from "../../components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupGetAll } from "../../storage/group/groupGetAll";
import { Loading } from "../../components/Loading";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Turmas", "Não foi possível carregar as turmas");
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      console.log("UseFocus executou");
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      {isLoading ? (
        <Loading />
      ) : (
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
      )}

      <Button title="Criar nova Turma" onPress={handleNewGroup} />
    </Container>
  );
}
