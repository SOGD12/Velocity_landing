export const WHATSAPP_NUMBER = '573108875842'

export const WHATSAPP_MESSAGE =
  '¡Hola, buenas! Vi los combos de gafas en la página web y no me quiero quedar sin el mío. ¿Me comparten los diseños que tienen disponibles para cuadrar el pedido?'

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
