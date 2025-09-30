import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import { useRegister } from "../hooks/useRegister";

const schema = z.object({
name: z.string().min(2, "Name is too short"),
email: z.string().email("Invalid email"),
password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const RegisterForm: React.FC = () => {
const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
});

const mutation = useRegister();

const onSubmit = (data: FormData) => {
    mutation.mutate(data);
};

return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
    <Input label="Name" {...register("name")} />
    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

    <Input label="Email" type="email" {...register("email")} />
    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

    <Input label="Password" type="password" {...register("password")} />
    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

    <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Registering..." : "Register"}
    </Button>

    {mutation.isError && (
        <p className="text-red-500 text-sm">{mutation.error.message}</p>
    )}
    {mutation.isSuccess && (
        <p className="text-green-600 text-sm">{mutation.data.message}</p>
    )}
    </form>
);
};

export default RegisterForm;
