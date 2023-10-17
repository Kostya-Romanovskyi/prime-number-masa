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
      Notify.warning("Input field can't be empty");
      return;
    }

    const parsedValue = parseFloat(inputValue);
    if (!Number.isInteger(parsedValue)) {
      Notify.failure("Number must be an integer.");
      return;
    }

    if (parsedValue <= 1) {
      Notify.failure("Number must be more than 1");
      return;
    }

    if (parsedValue <= 3) {
      Notify.success(`${parsedValue} is a prime number, congratulations!)`);
      return;
    }

    if (parsedValue % 2 === 0 || parsedValue % 3 === 0) {
      Notify.info(`Sorry, ${parsedValue} is a composite number`);
      return;
    }

    for (let i = 5; i * i <= parsedValue; i += 6) {
      if (parsedValue % i === 0 || parsedValue % (i + 2) === 0) {
        Notify.info(`Sorry, ${parsedValue} is a composite number`);
        return;
      }
    }

    Notify.success(`${parsedValue} is a prime number, congratulations!)`);
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
