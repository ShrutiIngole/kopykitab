import filepdf from '../../sample.pdf'

const Sample = () => {
    return (
        <embed src={filepdf} type="application/pdf" width="100%" height="600px" />
    )
}

export default Sample;