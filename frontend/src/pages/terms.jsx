import React from 'react'
import { Link } from 'react-router-dom'
import { Button, List } from 'antd'

export function Terms() {
    return (
        <div className="flex h-full place-items-center place-content-center align-center">
            <div className="max-w-4xl w-[100%] p-6 mx-auto mt-12 bg-white rounded-lg  hover:shadow-red-300 hover:shadow-lg border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600 flex-col place-items-left p-10">

                <h1 className='text-[29px]'>Terms & Conditions:</h1>
                <br />
                Al usar este sitio web, aceptas cumplir con los siguientes términos y condiciones:
                <br />
                Uso del Sitio
                Este sitio está destinado únicamente para fines informativos y/o servicios especificados. No puedes usarlo para actividades ilegales o no autorizadas.
                <br />
                Propiedad Intelectual
                Todo el contenido de este sitio, incluidos textos, imágenes y logotipos, está protegido por derechos de autor. No puedes copiar, distribuir ni reproducir sin nuestro permiso previo.
                <br />
                Limitación de Responsabilidad
                No somos responsables de daños directos o indirectos derivados del uso del sitio o de la imposibilidad de acceder al mismo.
                <br />
                Modificaciones
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al ser publicados en esta página.
                <br />
                Si tienes preguntas sobre estos términos, contáctanos en imanolaguer1@gmail.com
                <br /><br />
            </div>
        </div>
    )
}
