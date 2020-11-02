import { Import, useDeno } from 'https://deno.land/x/aleph/mod.ts'
import React, { useState } from 'https://esm.sh/react'
import Logo from '../../components/logo.tsx'

export default function Test() {
    const [count, setCount] = useState(0)
    const version = useDeno(() => {
        return Deno.version
    })

    return (
        <div className="page">
            <Import from="../../style/index.less" />
            <p className="logo"><Logo /></p>
            <h1>Welcome to test</h1>
            <h1>Welcome to test</h1>
            <h1>Welcome to test</h1>
            <h1>Welcome to test</h1>
        </div>
    )
}
