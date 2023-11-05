import React from "react";
import {
  Flex,
  Text,
  Button,
  Box,
  Container,
  Separator,
  TextArea,
} from "@radix-ui/themes";
import { ShuffleIcon } from "@radix-ui/react-icons";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

const Home = () => {
  return (
    <>
      <Flex className="box no-bg" direction="row">
        {/* layout */}
        <Flex
          p={{
            initial: "6",
            sm: "9",
            lg: "9",
            xl: "9",
            xxl: "9",
          }}
          justify={{
            initial: "",
            sm: "",
            lg: "center",
            xl: "center",
            xxl: "center",
          }}
          direction={{
            initial: "column",
            sm: "row",
            lg: "row",
            xl: "row",
            xxl: "row",
          }}
          gap={{
            initial: "6",
            sm: "9",
            lg: "9",
            xl: "9",
            xxl: "9",
          }} 
          className="layout"
        >
          {/* left side */}
          <Flex direction="column" gap="6" className="left-side">
            <Flex direction="column" gap="2" justify="center" align="center">
              <img
                src="https://raw.githubusercontent.com/uxderrick/quote-generator/2684162b30ae3bca4f59f0f118498819ba6adea7/src/assets/full%20logo.svg"
                height="40"
              ></img>
              <Text align="center" size="2" className="link">
                by UXDerrick
              </Text>
            </Flex>
  

  
            <Separator
              color="green"
              orientation="horizontal"
              size="4"
              style={{
                background: "gray",
              }}
            />

            {/* Quote */}
            <Flex gap="3" direction="column" className="no-bg">
              <Text align="left" size="2">
                Enter your quote here
              </Text>
              <TextArea
                variant="soft"
                color="white"
                className="text-area no-bg"
                placeholder="Enter your quote here"
              ></TextArea>

              {/* link */}
              <Flex direction="row" align="center" gap="2" className="link">
                <ShuffleIcon></ShuffleIcon>
                <Text align="left" size="2" className="link">
                  OR use a random quote
                </Text>
              </Flex>
            </Flex>

            {/* Size Selector */}
            <Flex gap="3" direction="column" className="no-bg">
              <Text align="left" size="2">
                Select a size
              </Text>

              {/* Toggle Group */}
              <ToggleGroup.Root
                className="ToggleGroup"
                type="single"
                defaultValue="center"
                aria-label="Text alignment"
              >
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="small"
                  aria-label="Left aligned"
                >
                  <Text align="left" size="2">
                    S
                  </Text>
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="large"
                  aria-label="Center aligned"
                >
                  <Text align="left" size="2">
                    L
                  </Text>
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="x-large"
                  aria-label="Right aligned"
                >
                  <Text align="left" size="2">
                    XL
                  </Text>
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </Flex>

            {/* Author */}
            <Flex gap="3" direction="column" className="no-bg">
              <Text align="left" size="2">
                Add an author
              </Text>
              <TextArea
                variant="soft"
                color="white"
                className="author-text-area no-bg"
                placeholder="Enter your quote here"
              ></TextArea>
            </Flex>

            {/* Button */}
            <Button
              variant="solid"
              color="green"
              className="button no-bg"
              size="2"
            >
              Export Quote
            </Button>
          </Flex>
          {/* <div className="separator"></div> */}
          {/* right side */}
          <Flex
            className="right-side"
            direction="column"
            style={{
              color: "#fff",
            }}
            p={{
              initial: "5",
              sm: "9",
              lg: "9",
              xl: "9",
              xxl: "9",
            }}
            gap={{
              initial: "6",
              sm: "9",
              lg: "9",
              xl: "9",
              xxl: "9",
            }}
          >
            <Text
              align="left"
              size={{
                initial: "5",
                sm: "9",
                lg: "9",
                xl: "9",
                xxl: "9",
              }}
              className="print"
              style={{
                lineHeight: "1.3",
              }}
            >
              Lore, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quibusdam doloribus, voluptatem, voluptatum, quod voluptate
            </Text>
            <Text
              align="left"
              size={{
                initial: "2",
                sm: "5",
                lg: "5",
                xl: "5",
                xxl: "5",
              }}
              className="author"
              style={{
                lineHeight: "1.3",
              }}
              color="teal"
            >
              Derrick Tsorme
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
