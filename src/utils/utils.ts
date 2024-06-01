export const formatNumber = (
  number: number | null,
  thousandsSeparator = ',',
  decimalSeparator = '.',
  addDecimals = true,
) => {
  // Handle null input
  if (number === null) {
    return 'Contact the owner'
  }

  // Format the number to two decimal places as a string if addDecimals is true
  let formattedNumber = addDecimals ? number.toFixed(2) : number.toString()

  // Replace the default decimal separator (.) with the specified one, if decimals are added
  if (addDecimals) {
    formattedNumber = formattedNumber.replace('.', decimalSeparator)
  }

  // Split the number into the integer and decimal parts
  const parts = formattedNumber.split(decimalSeparator)
  let integerPart = parts[0]
  const decimalPart = parts.length > 1 ? decimalSeparator + parts[1] : ''

  // Use a regular expression to insert the thousands separator
  const regex = /\B(?=(\d{3})+(?!\d))/g
  integerPart = integerPart.replace(regex, thousandsSeparator)

  // Reassemble the integer and decimal parts
  formattedNumber = integerPart + decimalPart

  return formattedNumber
}
