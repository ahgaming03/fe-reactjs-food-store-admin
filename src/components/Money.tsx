interface MoneyProps {
  amount: number;
}

export default function Money({ amount }: MoneyProps) {
  const formatted = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(amount);

  return <>{formatted}</>;
}
