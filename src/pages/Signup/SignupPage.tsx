import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/components";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import styles from "@/styles/loginpage.module.css";
import { RiErrorWarningLine } from "react-icons/ri";

const formSignupSchema = z
  .object({
    username: z
      .string()
      .min(3, "Debe tener al menos 3 caracteres")
      .max(40, "No se puede exceder más de 40 caracteres"),
    email: z.string().email({ message: "Email invalido" }),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "La contraseña no coincide",
    path: ["confirmPassword"],
  });

const SignupPage = () => {
  const form = useForm<z.infer<typeof formSignupSchema>>({
    resolver: zodResolver(formSignupSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSignupSchema>) => {
    console.log({ values });
    toast("Iniciando Sesion!", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  const onError = () => {
    toast("Error al ingresar los datos", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center h-screen ${styles.background_personality}`}
    >
      <Link to={"/"}>
        <img
          src="assets/logo.png"
          alt="logo"
          className="object-cover w-[120px] h-[50px]"
        />
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <Card className="w-[400px]">
            <CardHeader>
              <CardTitle>Crear Cuenta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de Usuario</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Nombre de Usuario"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} placeholder="Email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Minimo de 6 caracteres"
                          />
                        </FormControl>
                        <FormDescription className="flex items-center gap-2">
                          <RiErrorWarningLine className="text-blue-500" /> La
                          contraseña debe tener 6 caracteres
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vuelve a escribir tu contraseña</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Continuar
              </Button>
              {/* <p className="text-xs">
                Al continuar, aceptas las{" "}
                <span className="text-blue-700">Condiciones de uso</span> y el
                <span className="text-blue-700">Aviso de privacidad</span> de
                Enatel Perú
              </p> */}
              <div className="text-center">
                <span className="text-gray-500">
                  ¿Ya tienes una cuenta?{" "}
                  <Link to="/login" className="text-red-500">
                    Iniciar Sesion
                  </Link>
                </span>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>

      <ToastContainer />
      <DevTool control={form.control} />
    </div>
  );
};

export default SignupPage;
