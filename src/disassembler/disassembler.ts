import * as fs from 'fs';

enum field_set { data, text };

// main disassembling function
export function Disassemble(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var disassembled_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'asm';

    try {
        var in_str = fs.readFileSync(full_path, 'utf-8');
        var in_arr = in_str.split(/\n/);
        in_arr.forEach((val) => {
            var code = parseInt(val, 16).toString(2).padStart(32, '0');
            
            console.log(code);
        });

    } catch (e) {
        console.log('Error:', e.stack);
    }
    return disassembled_path;
}
