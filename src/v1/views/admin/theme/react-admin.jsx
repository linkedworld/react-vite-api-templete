class baseColors {
    static colorHeader = '#def2ff'
    static colorEmpasCol = 'rgba(0,0,0,0.07)'
    static colorActiveRow = 'rgba(255,0,0,0.5)'
    static colorNonmalButton = 'rgba(0,0,0,0.4)'
    static colorEmpasButton = 'rgba(0,255,0,0.4)'
    static colorEmpasTableRowBorder = '#32a1ce'
}

const baseStyle = {
}

const buttonsStyle = {
}

class style {
    static Grid = {
        '& .RaDatagrid-headerRow >th': {
            backgroundColor: baseColors.colorHeader,
            fontWeight: 'bold',
            borderBottom: `thick double ${baseColors.colorEmpasTableRowBorder}`,
        },
        '& .MuiTypography-root': {
            fontSize: '1.1rem', 
        },
        '& .MuiTableBody-root': {
            borderBottom: `2px solid ${baseColors.colorEmpasTableRowBorder}`,
        },

        '& .RaDatagrid-headerCell:first-of-type': {
            width: '36px',
        },
        '& .MuiTableRow:hover': {
            color: baseColors.colorActiveRow,
        },
        '& .column-id': {
            width: '100px',
            textAlign: 'center',
            backgroundColor: baseColors.colorEmpasCol,
        },
        '& .column-externalID': {
            width: '100px',
            textAlign: 'center',
            backgroundColor: baseColors.colorEmpasCol,
        },
        '& .column-title': {
            minWidth: '200px',
        },
        '& .column-author': {
            width: '100px',
        },
        '& .column-meta\.scale': {
            width: '100px',
        },
        '& .column-row-actions': {
            width: '120px',
            textAlign: 'left',
            paddingLeft: '2px',
            paddingRight: '2px',
            backgroundColor: baseColors.colorEmpasCol,
        },    
        '& .column-action-edit': {
            width: '16px',
            textAlign: 'center',
            paddingLeft: '0px',
            paddingRight: '0px',
            backgroundColor: baseColors.colorEmpasCol,
        },
        '& .column-action-show': {
            width: '16px',
            textAlign: 'center',
            paddingLeft: '0px',
            paddingRight: '0px',
            backgroundColor: baseColors.colorEmpasCol,
        },
        '& .column-date': {
            width: '200px',
        },
    }

    static RowButtons = {
        '&': {
            display: "inline-flex",
            alignItems: "center",
            gridGap: 0,
            backgroundColor: "transparent",
            borderColor: "transparent",
            fontSize: 14, 
            svg : {
                width: 16,
                height: 16,
            }
        },
        '&:hover': {
            svg : {
                path: {
                    fill : "blue"
                }
            }
        }
    }

    static InlineButtons = {
        '&': {
            display: "inline-block",
            alignItems: "center",
            gridGap: 0,
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderRadius: "100%",
            fontSize: 10,
            lineHeight: 1,
            padding: 0,
            margin: 0,
            // marginRight: 0,
            // marginLeft: 0,
            paddingInline: '0px',
            marginTop: '-2px',
            marginLeft: '8px',
            marginRight: '8px',
            // transition: 'svg 0.3s',
            minWidth: 14,
            verticalAlign: 'top',
            transition: 'svg 0.2s, width 0.3s, height 0.3s',
            svg : {
                width: 12,
                height: 12,
                fill: baseColors.colorNonmalButton,
                transition: 'width 0.3s, height 0.3s'
            }
        },
        '& .MuiButton-startIcon': {
            width: 12,
            height: 12,
            padding: 0,
            margin: 0,
        },
        '& .MuiButton-sizeSmal': {
            width: 12,
            height: 12,
            padding: 0,
            margin: 0,
        },
        '&:hover': {
            borderColor: baseColors.colorNonmalButton,
            backgroundColor: baseColors.colorEmpasButton,
            svg : {
                path: {
                    width: 24,
                    height: 24,
                    fill : "blue",
                }
            }
        }
    }
}    

export {style, baseColors, baseStyle};