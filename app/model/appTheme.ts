export interface AppThemeConfig {
    colors: {
        white:string;
        orange:string;
        lightOrange: string;
        darkOrange: string;
        blue: string;
        lightBlue: string;
        darkBlue: string;
        green: string;
        lightGreen: string;
        red: string;
        lightRed: string;
        gray: string;
        lightGray: string; 
    },
    shadows:{
        dark: string;
        light: string;
    }
}

export type VariantTypes = "secondary" | "primary" | "worry" 