import React, { useState } from "react";
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Logo from "./Logo";
import style from "./styles/styles.module.scss"
import {CompassOutlined, HeartOutlined, HomeFilled, MessageOutlined} from '@ant-design/icons';

const Header : React.FC = () => {
    const [inputText, setInputText] = useState<string | undefined>("");

    const { Search } = Input;
    const onSearch = (value: string) => {
        setInputText(value);
        console.log(inputText);
        
    }

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Logo />
                <Search 
                    className={style.searchInput} 
                    placeholder="Поиск" 
                    onSearch={onSearch} 
                />
                <div className={style.linkIcons}>
                    <a href="">
                        <HomeFilled />
                    </a>
                    <a href="">
                        <MessageOutlined />
                    </a>
                    <a href="">
                        <CompassOutlined />
                    </a>
                    <a href="">
                        <HeartOutlined />
                    </a>                    
                </div>
            </div>
        </div>
    )
}

export default Header;          