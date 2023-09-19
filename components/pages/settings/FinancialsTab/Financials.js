import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import CheckBox from "@/components/form-elements/CheckBox";
import Button from "@/components/form-elements/Button";

const Financials = () => {
  return (
    <div className=" space-y-6">
      <ContainerShadow>Financials</ContainerShadow>
      <ContainerShadow>
        <div className="flex items-center justify-between px-8">
          <h3>Set Kudibar Currency</h3>
          <div className="flex gap-4">
            <CheckBox id={"NGN"}>NGN</CheckBox>
            <CheckBox id={"usd"}>USD</CheckBox>
            <CheckBox id={"gbp"}>GBP</CheckBox>
            <CheckBox id={"eur"}>EUR</CheckBox>
          </div>
        </div>
      </ContainerShadow>
      <ContainerShadow>
        <div className="px-8">
          <h3>Split Formula</h3>
          <div className="flex justify-between mt-6">
            <p>Instant Payout Percentage (Normal Users)</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Instant Payout Percentage (Verified Users)</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>After Event Percentage</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>After Event Payout Duration</p>
            <input className="input-text" placeholder="10" />
          </div>
          <span className="flex justify-end mt-6">
            <Button>Save Changes</Button>
          </span>
        </div>
      </ContainerShadow>
      <ContainerShadow>
        <div className="px-8">
          <h3>Minimum Amount Price Of Ticket</h3>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in NGN</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in USD</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in GBP</p>
            <input className="input-text" placeholder="10" />
          </div>
          <div className="flex justify-between mt-6">
            <p>Minimum Amount Price in EUR</p>
            <input className="input-text" placeholder="10" />
          </div>
          <span className="flex justify-end mt-6">
            <Button>Save</Button>
          </span>
        </div>
      </ContainerShadow>
      <ContainerShadow>
        <div className="px-8">
          <h3>Payment</h3>
          <div className="flex items-center justify-between">
            <p>Set Kudibar Currency</p>
            <div className="grid grid-cols-2 items-center gap-4">
              <CheckBox id={"ft"}>Flutterwave</CheckBox>
              <CheckBox id={"py"}>Paystack</CheckBox>
              <CheckBox id={"fi"}>Fincra</CheckBox>
              <CheckBox id={"ba"}>Bani</CheckBox>
            </div>
          </div>
        </div>
      </ContainerShadow>
    </div>
  );
};

export default Financials;
