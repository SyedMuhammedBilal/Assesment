import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '-webkit-fill-available',
        height: 'auto',

    },
    benefitsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 'inherit',
        marginTop: '3vh'
    },
    benefitWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: 'inherit',
        marginTop: '20px',
        gap: '0.5rem'
    },
    benefitTypo: {
        fontWeight: 400,
        fontSize: "22px",
        lineHeight: "32px",
        display: "flex",
        alignItems: "center",
        color: "#131821",
        textAlign: 'left',
    },
})