"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Button } from "../components/ui/moving-border";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Home = () => {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(5);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const words = [
    {
      text: "Generating",
      className: "text-white text-lg sm:text-3xl lg:text-5xl",
    },
    {
      text: "strong",
      className: "text-white text-lg sm:text-3xl lg:text-5xl",
    },
    {
      text: "Passwords",
      className:
        "text-blue-500 dark:text-blue-500 text-lg sm:text-3xl lg:text-5xl",
    },
    {
      text: "made",
      className: "text-white text-lg sm:text-3xl lg:text-5xl",
    },
    {
      text: "simple.",
      className: "text-white text-lg sm:text-3xl lg:text-5xl",
    },
  ];

  useEffect(() => {
    const selectWords = (length: number) => {
      const allCharactersArray: string[] = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "+",
      ];
      setPassword("");
      for (let i = 0; i < length; i++) {
        if (includeNumbers && !specialCharacters) {
          const newArray = allCharactersArray.filter(
            (item, index) => index < 62
          );
          let randomIndex = Math.floor(Math.random() * newArray.length);
          setPassword((preValue) => {
            return preValue + newArray[randomIndex];
          });
        } else if (!includeNumbers && specialCharacters) {
          const newArray = allCharactersArray.filter(
            (item, index) => index > 9
          );
          let randomIndex = Math.floor(Math.random() * newArray.length);
          setPassword((preValue) => {
            return preValue + newArray[randomIndex];
          });
        } else if (!includeNumbers && !specialCharacters) {
          const newArray = allCharactersArray.filter(
            (item, index) => index < 62 && index > 9
          );
          let randomIndex = Math.floor(Math.random() * newArray.length);
          setPassword((preValue) => {
            return preValue + newArray[randomIndex];
          });
        } else {
          let randomIndex = Math.floor(
            Math.random() * allCharactersArray.length
          );
          setPassword((preValue) => {
            return preValue + allCharactersArray[randomIndex];
          });
        }
      }
    };
    selectWords(range);
  }, [range, includeNumbers, specialCharacters]);

  const handleChangeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const range = Number(event.target.value);
    // console.log(range);

    setRange(range);
  };

  const handleAddNumberChange = () => {
    setIncludeNumbers((preValue) => !preValue);
  };

  const handleAddSymbolChange = () => {
    setSpecialCharacters((preValue) => !preValue);
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex items-center justify-center gap-8 w-[80%] md:w-[30%] min-h-screen mx-auto flex-col px-4 text-white ">
        <TypewriterEffectSmooth words={words} />
        <BackgroundGradient className="rounded-[22px] max-w-sm p-2  bg-black dark:bg-zinc-900">
          <Input
            readOnly
            value={password}
            className="h-[50px] text-xl font-semibold tracking-wider bg-[#18181B] rounded-xl"
          />
        </BackgroundGradient>
        <input
          className="slider"
          type="range"
          min="6"
          max="16"
          onChange={handleChangeRange}
        />
        <Input
            readOnly
            value={`Length: ${range}`}
            className="text-center h-[40px] w-[50%] md:w-[40%] text-xl font-semibold tracking-wider bg-[#18181B] rounded-xl"
        />

        <div className="p-6 md:p-10 rounded-full flex flex-col gap-4">
          <Button
            borderRadius="1.75rem"
            className="bg-slate-800 text-white border-slate-900"
          >
            <div className="flex items-center gap-4">
              <Switch
                checked={includeNumbers}
                onCheckedChange={handleAddNumberChange}
              />
              <p className="font-medium text-md text-[#3B82F6]">Add Numbers</p>
            </div>
          </Button>
          <Button
            borderRadius="1.75rem"
            className="bg-slate-800 text-white border-slate-900"
          >
            <div className="flex items-center gap-4">
              <Switch
                checked={specialCharacters}
                onCheckedChange={handleAddSymbolChange}
              />
              <p className="font-medium text-md text-[#3B82F6]">Add Symbols</p>
            </div>
          </Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Home;
