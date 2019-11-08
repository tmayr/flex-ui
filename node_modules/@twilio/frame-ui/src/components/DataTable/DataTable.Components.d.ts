import { TableRowProps } from "@material-ui/core/TableRow";
export interface StyledTableRowProps extends TableRowProps {
    onClick?: () => void;
}
export declare const StyledTableRow: import("create-emotion-styled/types/react").StyledOtherComponent<TableRowProps, TableRowProps, import("../theme").Theme>;
