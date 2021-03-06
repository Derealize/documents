import React, { useState, useEffect } from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { CgSoftwareDownload } from "react-icons/cg";

const fetchVersion = async () => {
  const isDarwin = navigator.platform.startsWith("Mac");

  const resp = await fetch("https://cdn.socode.pro/latest.json", {
    headers: {
      "content-type": "application/json",
    },
  });
  if (resp.ok) {
    const matrix = await resp.json();
    return {
      standard: `https://cdn.socode.pro/Derealize-${isDarwin ? matrix.mac : matrix.win}.${
        isDarwin ? "dmg" : "exe"
      }`,
      studio: `https://cdn.socode.pro/Derealize-studio-${
        isDarwin ? matrix.mac_studio : matrix.win_studio
      }.${isDarwin ? "dmg" : "exe"}`,
    };
  } else {
    return {
      standard: `https://cdn.socode.pro/Derealize.${isDarwin ? "dmg" : "exe"}`,
      studio: `https://cdn.socode.pro/Derealize-studio.${isDarwin ? "dmg" : "exe"}`,
    };
  }
};

export default function CallToActionWithVideo() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    const loadplyr = async () => {
      const { default: Plyr } = await import("plyr");
      const player = new Plyr("#player");
      player.on("playing", (event) => {
        setPlaying(true);
      });
      player.on("ended", (event) => {
        setPlaying(false);
      });
    };
    loadplyr();
  }, []);

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={8}
        py={{ base: 20, md: 28 }}
        direction={playing ? "column" : { base: "column", lg: "row" }}>
        <Stack flex={1} spacing={5} mb={4}>
          <Heading lineHeight={1.3} fontWeight={600}>
            <Text
              as={"span"}
              position={"relative"}
              color={"rgb(2,132,199)"}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#bae6fd",
                zIndex: -1,
              }}>
              Derealize,
            </Text>
            <Text as={"span"} color={"red.400"} fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}>
              TailwindCSS Editor
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            play with the development running front-end project (not html module)
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            alignItems={{ base: "flex-start", sm: "center" }}>
            <Link to="/docs/guides/configuration" className="ghost">
              <Button
                variant="outline"
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                borderWidth={4}
                borderColor={"red.400"}
                // bg={"red.400"}
                // _hover={{ bg: "red.500" }}
              >
                Get started
              </Button>
            </Link>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=Derealize&repo=derealize&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"></iframe>
          </Stack>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <BrowserOnly>
              {() => {
                const [standard, setStandard] = useState<string>();
                const [studio, setStudio] = useState<string>();

                useEffect(() => {
                  fetchVersion().then((result) => {
                    setStandard(result.standard);
                    setStudio(result.studio);
                  });
                }, []);

                return (
                  <>
                    <a className="ghost" href={standard}>
                      <Button
                        rounded={"full"}
                        size={"lg"}
                        fontWeight={"normal"}
                        px={6}
                        leftIcon={<CgSoftwareDownload color={"gray.300"} />}>
                        Editor (recommend)
                      </Button>
                    </a>
                    <a className="ghost" href={studio}>
                      <Button
                        rounded={"full"}
                        size={"lg"}
                        fontWeight={"normal"}
                        px={6}
                        leftIcon={<CgSoftwareDownload color={"gray.300"} />}>
                        Studio (with node runtime)
                      </Button>
                    </a>
                  </>
                );
              }}
            </BrowserOnly>
          </Stack>
        </Stack>
        <Flex flex={1.4} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Box
            position={"relative"}
            // height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}>
            <video
              id="player"
              playsInline
              controls
              data-poster="https://assets-derealize-com.onrender.com/hero.png">
              <source src="https://assets-derealize-com.onrender.com/hero.mp4" type="video/mp4" />
            </video>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
