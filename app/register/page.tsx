"use client"

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { FieldValues,useForm,FormSubmitHandler, SubmitHandler, FieldErrors} from "react-hook-form"
import Input from "../components/Input";
import { useState } from "react";
import { ClockLoader } from "react-spinners";

const Page = () => {
    const router = useRouter();
    const [loading,setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{
            errors
        },
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            nom: '',
            prenom:'',
            date: '',
            email:'',
            password:'',
            password_verif: '',
            rgpd: false
        }
    })
    const [erros,setErrors] = useState<FieldErrors>(errors)

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        if(data.password !== data.password_verif){
            setTimeout(() => {
                setErrors({
                    password_verif: {
                        type: 'manual',
                        message: 'Les mots de passe ne correspondent pas'
                    }
                })
                errors.password_verif = {
                    type: 'manual',
                    message: 'Les mots de passe ne correspondent pas'
                }
                setLoading(false);
            }, 5000)            
            return;
        }
        setTimeout(() => {
            setLoading(false);
            reset();
            router.push('/');
        }, 5000)
    }
  return (

    <div className="h-full w-full grid place-items-center bg-primarry relative">
        <form className="flex flex-col gap-8 items-center"
        onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="font-semibold text-3xl text-white">
                Créer un compte
            </h1>
            <div className="flex flex-col gap-4">
                <Input 
                errors={errors}
                register={register}
                id="nom"
                label="Nom"
                required
                disabled={loading}
                />
                <Input 
                errors={errors}
                register={register}
                id="prenom"
                label="Prénom"
                required
                disabled={loading}
                />
                <Input 
                errors={errors}
                register={register}
                id="date"
                label="Date de naissance"
                type="date"
                required
                disabled={loading}
                />
                <Input 
                errors={errors}
                register={register}
                id="email"
                label="Email"
                type="email"
                required
                disabled={loading}
                />
                <Input 
                errors={errors}
                register={register}
                id="password"
                label="Mot de passe"
                type="password"
                required
                disabled={loading}
                showPassword
                />
                <Input 
                errors={errors}
                register={register}
                id="password_verif"
                label="Vérifiez mot de passe"
                type="password"
                required
                disabled={loading}
                showPassword
                />
                <Input 
                errors={errors}
                register={register}
                id="rgpd"
                label="J'accepte les conditions d'utilisation"
                checkbox
                required
                disabled={loading}
                />
                {erros.password_verif && (
                    <span className="text-white font-semibold">
                        {erros.password_verif.message?.toString()}
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-4">
                <Button 
                actionLabel={loading ? <ClockLoader color="#E44949" size={24} /> : 'Créer un compte'}
                outline
                type="submit"
                disabled={loading}
                />
                <div className="font-semibold text-neutral-800">
                    <p>Vous avez déja un compte ? </p>
                    <span className="font-medium text-neutral-200 cursor-pointer mt-4"
                    onClick={() => router.push('/signin')}>
                        Connectez-vous !
                    </span>
                </div>
            </div>
        </form>
        <div className="absolute self-end mb-4 text-white">
            © 2023 <span className="font-semibold">Meet</span><span className="text-black font-semibold">Up</span> . All rights reserved.
        </div>
    </div>
  )
}

export default Page