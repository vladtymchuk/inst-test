import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  num?: number;
  fn?: () => string; //void boolean number
  obj?: {
    f1: string
  };
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField : React.FC<Props> = ({handleChange}) => {
  // const [counter, setCounter] = useState<number | null | undefined>(5);
  const [counter, setCounter] = useState<{text: string}>({text: "hello"});

  const inputRef = useRef<HTMLInputElement>(null);

  

  // setCounter({text});
    return (
      <div>
        <input ref={inputRef} onChange={handleChange}/>          
      </div>
    );
}

export default TextField;