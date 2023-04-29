import {updateUniqueCodeState} from "./unique-code";

export interface AcceptUniqueCodeInput {
    uniqueCode: string;
    partnerId: string;
    value: number;
}

export async function acceptUniqueCode({ uniqueCode, partnerId, value }: AcceptUniqueCodeInput): Promise<boolean> {
    await updateUniqueCodeState({
        uniqueCode,
        partnerId,
        type: "accepted",
        value
    });
    return true;
}