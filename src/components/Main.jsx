import { useEffect, useState } from "react";

const Main = () => {
  const [bill, setBill] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [custom, setCustom] = useState();
  const [peoples, setPeoples] = useState(0);
  const [valorDividido, setValorDividido] = useState(0);
  const [total, setTotal] = useState(0);

  const [msg, setMsg] = useState(false);

  const calc = (b1, t2, p3) => {
    let valor = (b1 * t2) / 100;
    let taxa = valor / p3;
    let total = b1 / p3 + taxa;
    setValorDividido(taxa);
    setTotal(total);
  };

  const reset = () => {
    setBill("")
    setCustom("")
    setTaxa("")
    setPeoples("")
    setValorDividido("")
    setTotal("")
  }

  useEffect(() => {
    setBill("");
    setPeoples("");
  }, []);

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
            <button value={"5"} onClick={(e) => setTaxa(e.target.value)}>
              5%
            </button>
            <button value={"10"} onClick={(e) => setTaxa(e.target.value)}>
              {" "}
              10%
            </button>
            <button value={"15"} onClick={(e) => setTaxa(e.target.value)}>
              {" "}
              15%
            </button>
            <button value={"25"} onClick={(e) => setTaxa(e.target.value)}>
              {" "}
              25%
            </button>
            <button value={"50"} onClick={(e) => setTaxa(e.target.value)}>
              {" "}
              50%{" "}
            </button>
            <input type="number" value={custom} placeholder="Custom" />
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
          <span className="price">${valorDividido}</span>
        </div>

        <div className="amount">
          <div className="amount-title">
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <span className="price">${total}</span>
        </div>
        {!total ? (
          <button onClick={() => calc(bill, taxa, peoples)}>Calcular</button>
        ) : (
          <button onClick={() => reset()}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default Main;
