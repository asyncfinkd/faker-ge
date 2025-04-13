import { ModuleBase } from "../../internal/module-base";

export class PersonalNumberModule extends ModuleBase {
  private generateTheId(prefix?: string, length: number = 11): string {
    const prefixValue = prefix || "01";
    const randomPartLength = Math.max(0, length - prefixValue.length);
    const randomPart = Array.from({ length: randomPartLength }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    return `${prefixValue}${randomPart}`.substring(0, length);
  }

  /**
   * Generates a random personal number
   * @param {string} [prefix] Optional prefix for the personal number
   * @returns {string} A random personal number
   */
  pid(prefix?: string): string {
    return this.generateTheId(prefix);
  }
}
