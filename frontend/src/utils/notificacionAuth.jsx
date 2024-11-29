import { useEffect } from "react";
import { notification, Modal } from 'antd'
import { useUserContext } from '../contexts/userContext'



export function AuthNotification() {
    const [api, contextHolder] = notification.useNotification();
    const { user } = useUserContext()

    const authToken = localStorage.getItem('authToken')
    console.log(authToken)
    if (authToken) {
        Modal.warning({
            title: 'Login your account to access content!',
            content: (
                <div>
                </div>
            ),
            onOk() { },
        });

    }

    // useEffect(() => {
    //     // api.open({
    //     //     message: 'Notification Title',
    //     //     description:
    //     //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //     //     showProgress: true,

    //     // });
    // }, [])


    if (!authToken) {
        return (
            <>
                {contextHolder}
            </>
        )
    }

}



