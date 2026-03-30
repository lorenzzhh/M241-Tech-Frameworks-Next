
type ButtonProps = {
    label: string;
};

export function Button({ label }: ButtonProps) {
    return (
        <button style={{ backgroundColor: 'green', color: 'white' }}>
            {label}
        </button>
    );}