export declare module "react" {
  type WithClassName = {
    className?: string;
  };

  type FCS<P = {}> = FunctionComponent<P & WithClassName>;
}
