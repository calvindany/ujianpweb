const Title = ({ text, jenis }) => {
    return (
        <div>
            {
                (jenis === 'Title') ?
                <h1 className="my-4 title custom-padding">{text}</h1>
                    :
                <h4 className=" title custom-padding"  style={{marginTop:"80px", marginBottom: "50px"}}>{text}</h4>
            }
        </div>
    )
}

export default Title;
