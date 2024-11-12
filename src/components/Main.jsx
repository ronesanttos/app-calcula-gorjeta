const Main = () => {
  return (
    <div className="container-main">
      <div className="card-bill">
        <div className="input-bill">
          <label htmlFor="bill">Bill</label>
          <div className="input-img">
            <img src="../../public/images/icon-dollar.svg" alt="dolar" />
            <input type="number" id="bill" placeholder="0 " />
          </div>
        </div>
        <div className="select-btns">
          <p>Select Tip %</p>
          <div className="btns">
            <input type="button" value={"5%"} />
            <input type="button" value={"10%"} />
            <input type="button" value={"15%"} />
            <input type="button" value={"25%"} />
            <input type="button" value={"50%"} />
            <input type="submit" value="Custom" />
          </div>
        </div>
        <div className="input-people">
          <label htmlFor="people">Number of People</label>
          <div className="input-img">
            <img src="../../public/images/icon-person.svg" alt="person" />
            <input type="number" placeholder="0" />
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
