import logo from '../../logo.png'
import './style/title.css';

const Title = () => {
    return(
        <div className="title">
            <tr>
                <td className="logo">
                    <img src={logo} alt="KopyKitab" />
                </td>
                <td className="search-td">
                    <div className="search">
                        <input placeholder="Search by Title/Author/Description..." />
                        <select defaultValue="English">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        <button className="orange-grad"><i className="fas fa-search fa-lg" /></button>
                    </div>
                </td>
            </tr>
        </div>
    )
}

export default Title;