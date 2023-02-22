import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

//incluindo props de TouchableOpacity no type props, uniao entre tipos
type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
