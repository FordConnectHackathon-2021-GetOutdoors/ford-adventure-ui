export interface FileProps {
    fileName: string;
    ext: string;
    imageBase64?: string | ArrayBuffer | null;
    error?: any | null;
}