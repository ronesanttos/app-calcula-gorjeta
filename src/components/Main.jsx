import { useEffect, useState } from "react";

const Main = () => {
  const [bill, setBill] = useState(0);
  const [taxa, setTaxa] = useState(["5", "10", "15", "25", "50"]);
  const [custom, setCustom] = useState();
  const [peoples, setPeoples] = useState(0);
  const [valor, setValor] = useState(0);
  const handleCalcular = (e) => {
    if (e.target.value) {
      let valor = (bill * e.target.value) / 100;
      let valorDividido = valor / peoples;
      setValor(valorDividido);
    }
  };
console.log(valor)

  return (
    <div className="container-main">
      <div className="card-bill">
        <div className="input-bill">
          <label htmlFor="bill">Bill</label>
          <div className="input-img">
            <img src="../../public/images/icon-dollar.svg" alt="dolar" />
            <input
              type="number"
              id="bill"
              placeholder="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
        </div>
        <div className="select-btns">
          <p>Select Tip %</p>
          <div className="btns">
            <button value={`${taxa[0]}`} onClick={handleCalcular}>
              5%
            </button>
            <button value={`${taxa[1]}`} onClick={handleCalcular}>
              {" "}
              10%
            </button>
            <button value={`${taxa[2]}`} onClick={handleCalcular}>
              {" "}
              15%
            </button>
            <button value={`${taxa[3]}`} onClick={handleCalcular}>
              {" "}
              25%
            </button>
            <button value={`${taxa[4]}`} onClick={handleCalcular}>
              {" "}
              50%{" "}
            </button>
            <input
              type="number"
              value={custom}
              onChange={handleCalcular}
              placeholder="Custom"
            />
          </div>
        </div>
        <div className="input-people">
          <label htmlFor="people">Number of People</label>
          <div className="input-img">
            <img src="../../public/images/icon-person.svg" alt="person" />
            <input
              type="number"
              placeholder="0"
              value={peoples}
              onChange={(e) => setPeoples(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="card-total">
        <div className="amount">
          <div className="amount-title">
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <span className="price">$4.27</span>
        </div>

        <div className="amount">
          <div className="amount-title">
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <span className="price">$32.79</span>
        </div>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default Main;
