import { useNavigate } from "@tanstack/react-router";

/**
 * Hook personalizado para navegación global.
 * Puedes agregar aquí lógica común de navegación (por ejemplo, logs o animaciones).
 */
export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goTo = (to: string, options?: Parameters<typeof navigate>[0]) => {
    console.log(`🔀 Navegando a: ${to}`);

    navigate({
      to,
      ...options,
    });
  };

  return { goTo };
};