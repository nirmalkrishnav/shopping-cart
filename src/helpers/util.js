export default function formatCurrency(value) {
    return "$" + Number(value.toFixed(2)).toLocaleString() + " "
}