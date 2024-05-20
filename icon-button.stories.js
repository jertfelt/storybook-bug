import { createIconButton } from "./icon-button";
import imageFile from "../assets/core-icon-sortable.svg";

export default {
    title: "Icon Button",
    argTypes: {
        type: {
            description: "Typ av knapp",
            options: ["regular", "primary", "secondary"],
            control: { type: "select" },
        },
        iconType: {
            options: ["material symbol", "custom"],
            control: { type: "select" },
            description:"Välj mellan Material-biblioteket eller att ladda upp en egen."
        },
        icon: { control: "text", if: { arg: "iconType", neq: "custom" }, description:"Skriv i namnet på en Material ikon" },
        customIcon: { control: "text", if: { arg: "iconType", eq: "custom" } ,description: "Skriv en egen URL"},
        disabled: false,
        notice: false,
    },
};

const ButtonTemplate = ({ ...args }) => {
    return createIconButton({ ...args });
};

export const IconButton = ButtonTemplate.bind({});
IconButton.args = {
    type: "regular",
    iconType: "material symbol",
    icon: "clear",
    customIcon: imageFile,
    disabled: false,
    notice: false,
};

