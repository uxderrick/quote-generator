import { React, useEffect, useState } from "react";
import {
  Flex,
  Text,
  Button,
  Box,
  Container,
  Separator,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { ShuffleIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import html2canvas from "html2canvas";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import axios from "axios";

const Home = () => {
  //states
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");
  const [authorColor, setAuthorColor] = useState("");
  const [alignment, setAlignment] = useState("");
  const [randomQuoteClicked, setRandomQuoteClicked] = useState(false);

  const clickRandomQuote = () => {
    axios
      .get("https://api.quotable.io/random?maxLength=50")
      .then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
        // console.log(res.data);
        setRandomQuoteClicked(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearQuote = () => {
    setQuote("");
    setAuthor("");
    setRandomQuoteClicked(false);
  };

  const clickDerrickURL = () => {
    window.open("https://www.twitter.com/uxderrick");
  };

  const downloadImage = () => {
    const quote = document.getElementById("quote");
    const options = {
      logging: true,
      useCors: true,
      scale: 10,
    };

    html2canvas(quote, options).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "quote.jpeg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    });
  };

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
            <Flex
              direction="column"
              gap="2"
              justify="center"
              align="center"
              style={{
                maxWidth: "400px",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/uxderrick/quote-generator/2684162b30ae3bca4f59f0f118498819ba6adea7/src/assets/full%20logo.svg"
                height="40"
              ></img>
              <Text
                align="center"
                size="2"
                className="link"
                onClick={clickDerrickURL}
              >
                by UXDerrick
              </Text>
            </Flex>

            <Separator
              color="green"
              orientation="horizontal"
              size="4"
              style={{
                background: "gray",
                maxWidth: "400px",
              }}
            />

            {/* Quote */}
            <Flex gap="3" direction="column" className="no-bg">
              <Flex
                width="100%"
                style={{
                  maxWidth: "400px",
                }}
              >
                <Text
                  align="left"
                  size="2"
                  style={{
                    width: "100%",
                  }}
                >
                  Enter your quote here
                </Text>
                <Text align="left" size="2" color="amber">
                  {quote.length}/100
                </Text>
              </Flex>
              <TextArea
                variant="soft"
                color="white"
                className="text-area no-bg"
                placeholder="Enter your quote here"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                maxLength={100}
              ></TextArea>
              {/* link */}
              <Flex
                direction="row"
                align="center"
                gap="2"
                className="link"
                onClick={clickRandomQuote}
              >
                <ShuffleIcon></ShuffleIcon>
                <Text align="left" size="2" className="link">
                  OR use a random quote
                </Text>
              </Flex>
            </Flex>

            {/* Size Selector */}
            <Flex gap="3" direction="column" className="no-bg">
              <Text align="left" size="2">
                Select a color
              </Text>

              {/* BG Toggle Group */}
              <ToggleGroup.Root
                className="ToggleGroup"
                type="single"
                // defaultValue="#1b1b1f"
                aria-label="Text alignment"
                onValueChange={(value) => {
                  setColor(value),
                    color == "#00749E" ||
                    color == "#208368" ||
                    color == "tomato"
                      ? setAuthorColor("white")
                      : setAuthorColor("white");
                }}
              >
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="#1b1b1f"
                  aria-label="Dark"
                >
                  <Text align="left" size="2">
                    Dark
                  </Text>
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="tomato"
                  aria-label="Tomato"
                >
                  <Text align="left" size="2">
                    Tomato
                  </Text>
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="#208368"
                  aria-label="Green"
                >
                  <Text align="left" size="2">
                    Teal
                  </Text>
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="#00749E"
                  aria-label="Sky"
                >
                  <Text align="left" size="2">
                    Sky
                  </Text>
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </Flex>

            {/* Alignment Selector */}
            <Flex gap="3" direction="column" className="no-bg">
              <Text align="left" size="2">
                Select an alignment
              </Text>

              {/* Alignment Toggle Group */}
              <ToggleGroup.Root
                className="ToggleGroup"
                type="single"
                defaultValue="left"
                aria-label="Text alignment"
                onValueChange={(value) => {
                  setAlignment(value),
                    value == "left"
                      ? setAlignment("left")
                      : value == "center"
                      ? setAlignment("center")
                      : setAlignment("right");
                }}
              >
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="left"
                  aria-label="Left aligned"
                >
                  <TextAlignLeftIcon />
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="center"
                  aria-label="Center aligned"
                >
                  <TextAlignCenterIcon />
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="ToggleGroupItem"
                  value="right"
                  aria-label="Right aligned"
                >
                  <TextAlignRightIcon />
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </Flex>

            {/* Author */}
            <Flex gap="3" direction="column" className="no-bg">
              <Flex
                width="100%"
                style={{
                  maxWidth: "400px",
                }}
              >
                <Text
                  align="left"
                  size="2"
                  style={{
                    width: "100%",
                  }}
                >
                  Add an author
                </Text>
                <Text align="left" size="2" color="amber">
                  {author.length}/20
                </Text>
              </Flex>
              <TextArea
                variant="soft"
                color="white"
                className="author-text-area no-bg"
                placeholder="Enter your author here"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                maxLength={20}
              >
                {author}
              </TextArea>
            </Flex>

            <Flex gap="4" direction="column" className="no-bg">
              {/* Button */}
              <Button
                variant="solid"
                color={quote.length == 0 ? "gray" : "green"}
                className="button no-bg"
                size="3"
                onClick={quote.length == 0 ? null : downloadImage}
              >
                Export Quote
              </Button>

              {/* Clear */}
              <Button
                variant="outline"
                color={"red"}
                className="button no-bg"
                size="3"
                onClick={clearQuote}
              >
                Clear Quote
              </Button>
            </Flex>
          </Flex>

          {/* right side */}
          <Flex
          justify="center"
            id="quote"
            className="right-side"
            direction="column"
            style={{
              border: "1px solid #5a6165",
              backgroundColor: color == "" ? "#000000" : color,
            }}
            p={{
              initial: "5",
              sm: "6",
              lg: "9",
              xl: "9",
              xxl: "9",
            }}
            gap={{
              initial: "3",
              sm: "3",
              lg: "3",
              xl: "3",
              xxl: "3",
            }}
          >
            <Text
              align={alignment}
              size={{
                initial: "2",
                sm: "3",
                lg: "3",
                xl: "3",
                xxl: "5",
              }}
              className="author"
              style={{
                lineHeight: "1.3",
                color: authorColor,
              }}
            >
              {author}
            </Text>
            <Text
              align={alignment}
              size={{
                initial: "5",
                sm: "6",
                lg: "9",
                xl: "9",
                xxl: "9",
              }}
              className="print"
              style={{
                lineHeight: "1.3",
              }}
            >
              {quote}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
