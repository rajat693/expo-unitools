import Image from "@unitools/image";
import { View } from "react-native";

export default function Home() {
  return (
    <View>
      <Image
        source={require("@/assets/icon.png")}
        alt="Logo"
        width={200}
        height={200}
      />
    </View>
  );
}
