import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  // Mobile number provided by the user
  const phoneNumber = '918610949429'
  const message = encodeURIComponent('Hi Fazil Garments, I would like to inquire about a bulk B2B order.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="wa-icon" fill="currentColor">
        <path d="M16.035,2.029a14.283,14.283,0,0,0-12.392,21.36L2,30.347l7.108-1.86a14.249,14.249,0,1,0,6.927-26.458ZM16.035,28.093a11.836,11.836,0,0,1-6.044-1.666l-.433-.257-4.484,1.173,1.194-4.362-.281-.448a11.841,11.841,0,1,1,10.048,5.56Zm6.495-8.868c-.356-.178-2.109-1.042-2.436-1.161s-.565-.178-.8.178-.921,1.161-1.129,1.398-.416.267-.772.089a9.69,9.69,0,0,1-2.853-1.758,10.749,10.749,0,0,1-1.975-2.457c-.208-.357-.022-.55.156-.728.16-.159.356-.416.535-.624a2.4,2.4,0,0,0,.356-.595.654.654,0,0,0-.03-.624c-.089-.178-.8-1.932-1.1-2.645-.288-.695-.582-.6-.8-.611s-.445-.015-.683-.015a1.312,1.312,0,0,0-.951.445A3.987,3.987,0,0,0,7.1,13.623a6.883,6.883,0,0,0,1.44,3.645,15.688,15.688,0,0,0,6.01,5.321,20.088,20.088,0,0,0,2.007.743,4.8,4.8,0,0,0,2.189.138,3.67,3.67,0,0,0,2.4-1.695,2.956,2.956,0,0,0,.208-1.695C21.23,20.015,20.963,19.9,20.606,19.722Z" />
      </svg>
    </a>
  )
}
