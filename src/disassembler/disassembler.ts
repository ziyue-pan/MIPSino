import * as fs from 'fs';

enum field_set { data, text };

// main disassembling function
export function Disassemble(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var disassembled_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'asm';

    try {
        var field: field_set = field_set.data;
        var data_out: string[] = [];
        var text_out: string[] = [];
        var in_str = fs.readFileSync(full_path, 'utf-8');
        var in_arr = in_str.split(/\n/);
        

    } catch (e) {
        console.log('Error:', e.stack);
    }
    return disassembled_path;
}
