import Random from "@/components/Random/Random";
import { useEffect, useState } from "react";
import "./RandomArray.css";

export default function RandomArray(props) {
  const [trueCount, setTrueCount] = useState(1);
  const [sum, setSum] = useState([0, 0, 0, 0, 0]);
  const [realSum, setRealSum] = useState(0);

  useEffect(() => {
    const count = props.count;
    const number = props.number;

    if (count / (number + 1) >= 5) {
      setTrueCount(5);
    } else {
      setTrueCount(count - number * 5);
    }
  }, [props.number, props.count]);

  function DisplaySum(int, number) {
    let arr = sum;
    arr[number] = int + 1;
    console.log(arr);
    setSum(arr);
    let i = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    setRealSum(i);
    console.log(i);
  }

  return (
    <>
      <div className="RandomArray_container">
        {Array(trueCount)
          .fill()
          .map((_, index) => (
            <Random sumFunc={DisplaySum} key={index} number={index} />
          ))}
        <div className="RandomArray__sum">{realSum}</div>
      </div>
    </>
  );
}
