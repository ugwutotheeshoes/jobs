import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import WelcomeScreen from "./WelcomeScreen";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [setup, setSetup] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {setup ? (
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <WelcomeScreen setSetup={setSetup} />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if (searchTerm) {
                  router.push(`/search/${searchTerm}`);
                }
              }}
            />

            <Popularjobs />
            <Nearbyjobs />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
