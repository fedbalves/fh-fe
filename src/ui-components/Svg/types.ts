export type TPathProps = 'd' | 'fill';

export interface ISVGProps {
    width: number;
    height: number;
    viewBox?: string;
    paths: Record<TPathProps, string>[][];
    fillAll?: string;
}