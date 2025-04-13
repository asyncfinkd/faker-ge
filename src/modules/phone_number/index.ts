import { Provider } from "../../definitions/phone_number";
import { ModuleBase } from "../../internal/module-base";

const providers: { [key in Provider]: string } = {
  Silknet: "557",
  Magti: "555",
  Geocell: "559",
  Beeline: "551",
};

export class PhoneNumberModule extends ModuleBase {
  private generatePhoneNumber(provider: Provider = "Geocell"): string {
    const countryCode = "+995";
    const providerCode = providers[provider];
    const subscriberNumber = this.generateRandomDigits(6);

    return `${countryCode}${providerCode}${subscriberNumber}`;
  }

  private generateRandomDigits(length: number): string {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join(
      ""
    );
  }

  /**
   * Generates a random phone number
   * @param {Provider} [provider] Optional provider to generate a phone number for
   * @returns {string} A random phone number
   */
  phone(provider?: Provider): string {
    return this.generatePhoneNumber(provider);
  }
}
