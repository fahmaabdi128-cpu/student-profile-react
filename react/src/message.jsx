function Notification({ hasMessage }){
    return(
        <div>
            {hasMessage && <P>you have a new message!</P>}
        </div>
    )
}