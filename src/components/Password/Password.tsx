import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import styles from "@/styles/loginpage.module.css";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { z } from "zod";

const formPasswordSchema = z.object({
  password: z.string(),
});

const Password = () => {
  // TODO 
  const form = useForm<z.infer<typeof formPasswordSchema>>({
    resolver: zodResolver(formPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formPasswordSchema>) => {
    console.log({ values });
  };

  const onError = () => {};

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
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Password</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            placeholder="Password"
                          />
                        </FormControl>
                        <FormDescription>Ingresa tu contraseña</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Iniciar Sesion
              </Button>
              <div className="text-center">
                <span className="text-gray-500 text-xs">
                  ¿Olvidaste tu contraseña?{" "}
                  <Link to="/signup" className="text-red-500">
                    Recuperar Ahora
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

export default Password;
