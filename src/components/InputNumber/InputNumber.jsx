import { useState } from "react";
import { InputContainer, Text, Input, Button } from "./InputNumber.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const InputNumber = () => {
  const [inputValue, setInputValue] = useState("");

  Notify.init({
    position: "center-top",
    fontSize: "23px",
    width: "300px",
  });

  const handleInput = (e) => {
    setInputValue(e.target.value);

    if (inputValue === "" || inputValue === 0) {
      Notify.warning("Input field can`t be empty");
      return;
    }

    if (inputValue <= 1) {
      Notify.failure("Number must be more than 1");
      return;
    }

    if (inputValue <= 3) {
      Notify.success(`${inputValue} is a prime number, congratulations!)`);
      return;
    }

    if (inputValue % 2 === 0 || inputValue % 3 === 0) {
      Notify.info(`Sorry, ${inputValue} is a composite number`);
      return;
    }

    for (let i = 5; i * i <= inputValue; i += 6) {
      if (inputValue % i === 0 || inputValue % (i + 2) === 0) {
        Notify.info(`Sorry, ${inputValue} is a composite number`);
        return;
      }
    }

    Notify.success(`${inputValue} is a prime number, congratulations!)`);

    e.target.value = "";
  };

  return (
    <>
      <InputContainer>
        <Text>Enter number to check it`s prime or composite</Text>

        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="number"
        />
        <Button onClick={handleInput}>Сheck the number</Button>
      </InputContainer>
    </>
  );
};

export default InputNumber;
