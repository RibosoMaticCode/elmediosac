import styles from '@/pages/components/titlepage/titlepage.module.css'
import React from 'react';

interface Props{
  title: string;
}

export default function TitlePage(props: Props) {
  const { title } = props;
  return (
    <div>
        <div className={styles.bg_titlepage}>
            <div className="container-xl py-4">
                <h2 className={`${styles.titlepage} text-center my-4`}>{title}</h2>
            </div>
        </div>
    </div>
  )
}