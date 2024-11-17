import { useEffect, useState } from "react";

const Main = () => {
  const [bill, setBill] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [peoples, setPeoples] = useState(0);
  const [valorDividido, setValorDividido] = useState(0);
  const [total, setTotal] = useState(0);

  const [msg, setMsg] = useState("");

  const calc = (b1, t2, p3) => {
    if (!b1 || !t2 || !p3) {
      setMsg("Can't be zero");
      return;
    }

    let valor = (b1 * t2) / 100;
    let taxa = valor / p3;
    let total = b1 / p3 + taxa;
    setValorDividido(taxa);
    setTotal(total);
    setMsg("");
  };

  const reset = () => {
    setBill("");
    setTaxa("");
    setPeoples("");
    setValorDividido("");
    setTotal("");
    setMsg("");
  };

  useEffect(() => {
    setBill("");
    setPeoples("");
    setTaxa("");
  }, []);

  return (
    <div className="container-main">
      <div className="card-bill">
        <div className="input-bill">
          <div className="msg">
            <label htmlFor="bill">Bill</label>
            {msg && <p>{msg}</p>}
          </div>
          <div className={msg ? "input-img error" : "input-img"}>
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
          <div className="msg">
            <span>Select Tip %</span>
            {msg && <p>{msg}</p>}
          </div>
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
            <input
              type="number"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
              placeholder="Custom"
            />
          </div>
        </div>
        <div className="input-people">
          <div className="msg">
            <label htmlFor="people">Number of People</label>
            {msg && <p>{msg}</p>}
          </div>

          <div className={msg ? "input-img error" : "input-img"}>
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
