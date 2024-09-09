import React from "react";
import Link from "@unitools/link";
import { SafeAreaView, Text } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <Link href="https://gluestack.io/">
        <Text>gluestack</Text>
      </Link>
    </SafeAreaView>
  );
}
