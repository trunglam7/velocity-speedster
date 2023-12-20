import React from 'react'
import styles from '../styles/sidepanel.module.css'
import { Button } from '@mui/material'

export default function () {
  return (
    <div className={styles.side_panel_container}>
        <div>
            <h1>Velocity Speedster</h1>
            <p>Instructions:</p>
        </div>
        <div className={styles.data_option_container}>
            <Button variant='contained'>Load Data</Button>
            <Button variant='contained'>Save Data</Button>
        </div>
    </div>
  )
}
