export const LawService = ({ serviceIcon, serviceName }) => {

    return (
        <li className="col-3 text-center">
            <img style={{ maxHeight: "90%", filter: "brightness(0) invert(1)" }} src={serviceIcon} alt={serviceName} />
            <h3 className="h5 m-0">{serviceName.toUpperCase()}</h3>
        </li>
    )
}