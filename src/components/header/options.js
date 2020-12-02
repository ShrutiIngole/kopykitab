import './style/options.css';

const Options = () => {
    return(
        <div className="options">
            <tr>
                <td className="left">
                    <i className="fas fa-layer-group fa-lg" />
                    <a href="#top">My Library</a>
                </td>
                <td className="right">
                    <span className="tab">
                    <i className="fas fa-download fa-lg" />
                    <a href="https://content.kopykitab.com/eReader.html">Download eBook Reader</a>
                    </span>
                    <span className="tab">
                    <i className="fab fa-facebook-square fa-lg" />
                    <a href="#top">Login with facebook</a>|
                    <a href="https://www.kopykitab.com/index.php?route=account/login">Login</a>|
                    <a href="https://www.kopykitab.com/index.php?route=account/register">Register</a>
                    </span>
                    <span className="tab">
                    <i className="fas fa-phone-square-alt fa-lg" />
                    </span>
                    <span className="tab">
                    <i className="fas fa-shopping-cart fa-lg" />
                    </span>
                </td>
            </tr>
        </div>
    )
}

export default Options;